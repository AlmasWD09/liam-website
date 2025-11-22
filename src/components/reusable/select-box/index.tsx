"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SelectBox({
  options = [],
  defaultValue = "",
  className = "",
  triggerClassName = "",
  placeholder = "Select option",
  onChange,
}: {
  options: { label: string; value: string }[];
  defaultValue?: string;
  className?: string;
  triggerClassName?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className={className}>
        {options.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
