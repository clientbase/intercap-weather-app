import { cities } from "@/constants/cities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CitySelector(props: { onSelect: (value: string) => void }) {
  return (
    <Select onValueChange={(value) => props.onSelect(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a city" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem key={city.id} value={city.name.toString()}>
            {city.name}, {city.country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}