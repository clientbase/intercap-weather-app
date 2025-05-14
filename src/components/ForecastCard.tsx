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
  
  const goToPreviousDay = () => {
    setCurrentDayIndex(prev => Math.max(0, prev - 1));
  };
  
  const goToNextDay = () => {
    setCurrentDayIndex(prev => Math.min(totalDays - 1, prev + 1));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Forecast - {currentDate} ({currentDayIndex + 1} of {totalDays})
        </CardTitle>
      </CardHeader>
      <CardContent>
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
        
        <div className="flex justify-between items-center mt-4">
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
      </CardContent>
    </Card>
  );
}