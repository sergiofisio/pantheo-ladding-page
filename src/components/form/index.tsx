import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "../../schemas/forms";
import Input from "../input";
import ButtonComponent from "../button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { services: [] },
  });

  const handleCheckboxChange = (service: string) => {
    const currentServices = getValues("services") || [];
    if (currentServices.includes(service)) {
      setValue(
        "services",
        currentServices.filter((s) => s !== service)
      );
    } else {
      setValue("services", [...currentServices, service]);
    }
  };

  const onSubmit = (data: FormSchema) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <section
      id="contact"
      className="p-6 sm:p-10 lg:p-30 bg-darkBlue text-white flex flex-col lg:flex-row justify-center gap-8"
    >
      <div className="w-full lg:w-1/3 font-display flex flex-col gap-10 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-black">
          Vamos tirar sua ideia do papel?
        </h2>
        <p className="text-lg lg:text-xl font-semibold">
          Entre em contato e descubra como podemos transformar seu projeto em
          realidade!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black text-white rounded-3xl w-full lg:w-1/2 p-6 sm:p-10 flex flex-col gap-6"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full sm:w-2/3">
            <Input
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
              register={register("name")}
              errorMessage={errors.name?.message}
              required
            />
            <Input
              label="Nome da empresa"
              type="text"
              placeholder="Digite o nome da empresa"
              register={register("company")}
              errorMessage={errors.company?.message}
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="Digite seu email"
              register={register("email")}
              errorMessage={errors.email?.message}
              required
            />
            <Input
              label="Celular"
              type="text"
              placeholder="DDD + Número"
              register={register("phone")}
              errorMessage={errors.phone?.message}
              required
            />
          </div>

          <div className="w-full sm:w-1/3 relative">
            <label className="text-white font-medium">
              Quais serviços você precisa?
            </label>
            {[
              "Desenvolvimento de apps",
              "Desenvolvimento de sites",
              "E-commerce",
              "APIs",
              "Software personalizado",
              "Manutenção de sites",
              "Manutenção de apps",
            ].map((service) => (
              <div key={service} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(service)}
                  checked={getValues("services")?.includes(service) || false}
                  className="mr-2"
                />
                <label>{service}</label>
              </div>
            ))}
            {errors.services && (
              <span className="absolute left-0 text-red-500 text-sm mt-1">
                {errors.services.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className="text-white font-medium">
            Descreva seu problema:
          </label>
          <textarea
            placeholder="Descreva seu problema"
            rows={4}
            {...register("message")}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black resize-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <ButtonComponent
          text="Enviar"
          onClick={handleSubmit(onSubmit)}
          className="bg-button w-full hover:bg-blue-600"
        />
      </form>
    </section>
  );
}
