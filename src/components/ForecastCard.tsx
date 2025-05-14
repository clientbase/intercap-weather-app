import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function ForecastCard({ data }: { data: WeatherData[] }) {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  
  // Group data by day using dt timestamp
  const groupedData = data.reduce((acc: { [key: string]: WeatherData[] }, item) => {
    const date = new Date(item.dt * 1000); // Convert Unix timestamp to Date
    const dateOnly = date.toDateString(); // Get date as string for grouping
    if (!acc[dateOnly]) {
      acc[dateOnly] = [];
    }
    acc[dateOnly].push(item);
    return acc;
  }, {});
  
  const days = Object.keys(groupedData);
  const currentDate = days[currentDayIndex];
  const currentDayData = groupedData[currentDate] || [];
  const totalDays = days.length;
  
  // Prepare chart data
  const chartData = currentDayData.map(item => {
    const itemDate = new Date(item.dt * 1000);
    return {
      time: itemDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      temperature: item.temp,
    };
  });

  // Calculate the actual min and max temperatures for the day
  const allTemps = chartData.flatMap(item => [item.temperature]);
  const minTempValue = Math.min(...allTemps);
  const maxTempValue = Math.max(...allTemps);
  
  // Add some padding to the range (5 degrees on each side)
  const padding = 1;
  const yAxisMin = Math.floor(minTempValue - padding);
  const yAxisMax = Math.ceil(maxTempValue + padding);

  // Chart configuration with direct colors
  const chartConfig = {
    temperature: {
      label: "Temperature",
      color: "#3b82f6", // Blue
    },
    minTemp: {
      label: "Min Temperature", 
      color: "#06b6d4", // Cyan
    },
    maxTemp: {
      label: "Max Temperature",
      color: "#ef4444", // Red
    },
  } satisfies ChartConfig;
  
  const goToPreviousDay = () => {
    setCurrentDayIndex(prev => Math.max(0, prev - 1));
  };
  
  const goToNextDay = () => {
    setCurrentDayIndex(prev => Math.min(totalDays - 1, prev + 1));
  };

  const goToSpecificDay = (dayIndex: number) => {
    setCurrentDayIndex(dayIndex);
  };

  // Format date for button labels (e.g., "Sept 7")
  const formatDateForButton = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Forecast - {currentDate} ({currentDayIndex + 1} of {totalDays})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Temperature Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Temperature Throughout the Day</h3>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart accessibilityLayer data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                domain={[yAxisMin, yAxisMax]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12 }}
                label={{ 
                  value: 'Temperature (°C)', 
                  angle: -90, 
                  position: 'middle',
                  style: { fontSize: '12px' },
                }}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4, fill: "#3b82f6" }}
                activeDot={{ r: 6, fill: "#3b82f6" }}
              />
              <Line
                type="monotone"
                dataKey="minTemp"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ r: 3, fill: "#06b6d4" }}
                activeDot={{ r: 5, fill: "#06b6d4" }}
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="maxTemp"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 3, fill: "#ef4444" }}
                activeDot={{ r: 5, fill: "#ef4444" }}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Data Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Min</TableHead>
              <TableHead>Max</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDayData.map((item, index) => {
              const itemDate = new Date(item.dt * 1000);
              return (
                <TableRow key={index}>
                  <TableCell>
                    {itemDate.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </TableCell>
                  <TableCell>{item.temp}°C</TableCell>
                  <TableCell>{item.minTemp}°C</TableCell>
                  <TableCell>{item.maxTemp}°C</TableCell>
                  <TableCell className="capitalize">{item.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <Button 
            onClick={goToPreviousDay} 
            disabled={currentDayIndex === 0}
            variant="outline"
          >
            Previous Day
          </Button>
          
          <span className="text-sm text-gray-500">
            {currentDayIndex + 1} / {totalDays} days
          </span>
          
          <Button 
            onClick={goToNextDay} 
            disabled={currentDayIndex === totalDays - 1}
            variant="outline"
          >
            Next Day
          </Button>
        </div>

        {/* Day selection buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {days.map((day, index) => (
            <Button
              key={day}
              onClick={() => goToSpecificDay(index)}
              variant={index === currentDayIndex ? "default" : "outline"}
              size="sm"
              className="min-w-[70px]"
            >
              {formatDateForButton(day)}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}