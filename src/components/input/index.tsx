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
  const commonClasses = `w-full ${
    disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"
  } border-none font-display text-base font-normal text-black focus:outline-none text-center`;

  return (
    <div
      className={`flex flex-col justify-center gap-1 font-main font-normal text-white ${
        className || "w-full text-base"
      }`}
    >
      <label className={`capitalize ${classnameLabel}`} htmlFor={label}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`flex items-center w-full h-12 rounded-xl py-1 px-3 border-2 ${
          disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"
        } border-[#555555]`}
      >
        <input
          className={commonClasses}
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
