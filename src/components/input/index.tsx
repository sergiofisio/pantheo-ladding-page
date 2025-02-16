import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  required?: boolean;
  className?: string;
  classnameLabel?: string;
  disabled?: boolean;
  register: UseFormRegisterReturn;
}

export default function InputComponent({
  label,
  type,
  placeholder,
  errorMessage,
  required,
  className,
  classnameLabel,
  disabled,
  register,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 text-white ${className || "w-full"}`}>
      <label
        className={`capitalize font-medium ${classnameLabel}`}
        htmlFor={label}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center w-full h-12 rounded-xl py-1 px-3 border-2 border-[#555555] bg-white">
        <input
          className="w-full bg-white text-black focus:outline-none p-2"
          type={type}
          id={label}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={label === "Telefone" ? 11 : undefined}
          minLength={label === "Telefone" ? 11 : undefined}
          {...register}
        />
      </div>
      <span className="text-red-500 text-sm min-h-[20px] block">
        {errorMessage || "\u00A0"}
      </span>
    </div>
  );
}
