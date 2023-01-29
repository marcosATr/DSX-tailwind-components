import { useMemo, useState } from "react";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

interface RadioSearchComboProps {
  placeholder?: string;
  options: { id: string; label: string }[];
  selected: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  emptyResultText: string;
}

function RadioSearchCombo({
  placeholder = "",
  options,
  selected,
  onChange,
  emptyResultText,
}: RadioSearchComboProps) {
  const [filter, setFilter] = useState("");
  const onFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilter(e.target.value.toLocaleLowerCase());
  };

  const filterResult = useMemo(() => {
    return options.filter((option) =>
      option.label.includes(filter)
    );
  }, [filter]);

  return (
    <div className="w-full">
      <InputText
        placeholder={placeholder}
        value={filter}
        onChange={onFilterChange}
      />
      <div className="mt-4">
        {filterResult.length > 0 ? (
          filterResult.map((option) => {
            return (
              <div className="my-2">
                <InputRadio
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  selected={selected}
                  onChange={onChange}
                />
              </div>
            );
          })
        ) : (
          <span className="text-sm text-defaultText">
            {emptyResultText}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioSearchCombo;
