export interface InputFormProps {
    label: string
    placeholder: string
    value?: string
    type?: string
    large?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function InputForm({ label, placeholder, value, type, large, onChange }: InputFormProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-zinc-600 font-medium text-sm">{label}</label>
            {large ? (
                <textarea
                    className={`bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-zinc-400/15 focus:outline-none h-24 align-text-top`}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={`bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-zinc-400/15 focus:outline-none`}
                    type={type}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                />
            )}
        </div>
    )
}

// interface InputFieldProps {
//   label?: string;
//   placeholder: string;
//   value: string;
//   type?: string;
//   large?: boolean;
//   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
// }

// export default function InputField({
//   label,
//   placeholder,
//   value,
//   type = "text",
//   large = false,
//   onChange,
// }: InputFieldProps) {
//   const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : "input-field";

//   return (
//     <div className="w-full space-y-2">
//     {label && (<label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
//         {label}
//       </label>
//     )}
      

//       {large ? (
//         <textarea
//           id={inputId}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           rows={4}
//         />
//       ) : (
//         <input
//           id={inputId}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       )}
//     </div>
//   );
// }
