import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ForecastCard({ data }: { data: WeatherData[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Min</TableHead>
              <TableHead>Max</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((day, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(day.date).toLocaleDateString()}</TableCell>
                <TableCell>{day.temp}°C</TableCell>
                <TableCell>{day.minTemp}°C</TableCell>
                <TableCell>{day.maxTemp}°C</TableCell>
                <TableCell>{day.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}