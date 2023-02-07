type InputsType = {
  placeholder: string;
  name?: string;
  label?: string;
  required?: boolean;
  pattern?: string;
  data?: any;
};

export const Input = ({
  placeholder,
  name,
  label,
  required,
  pattern,
}: InputsType) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {label && (
        <label>
          {label} {required && "*"} :
        </label>
      )}
      <input
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        type="text"
        required={required}
        className="bg-white rounded-[8px] pl-[12px] w-full h-[40px] text-black"
      />
    </div>
  );
};

export const TextArea = ({ placeholder, label, name }: InputsType) => {
  return (
    <div className="flex flex-col w-full gap-[12px]">
      <label>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-white rounded-[8px] pl-[12px] pt-[8px] w-full h-[150px] text-black"
      />
    </div>
  );
};

export const Select = ({
  placeholder,
  name,
  required,
  label,
  data,
}: InputsType) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <label>{label} :</label>
      <select
        required={required}
        name={name}
        className="bg-white rounded-[8px] px-[12px] py-[8px] w-full h-[40px] text-black"
        placeholder={placeholder}
      >
        {data.map((elm: any, i: number) => {
          return (
            <option key={i} value={elm.link} className="bg-white">
              {elm.brand}
            </option>
          );
        })}
        <option value="">Autre</option>
      </select>
    </div>
  );
};
