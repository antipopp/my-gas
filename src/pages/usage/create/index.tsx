import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConsumptionCreateInputObjectSchema } from "../../../../prisma/generated/schemas";
import { LoadingButton } from "../../../components/ui/Button/Button";
import Card from "../../../components/ui/Card/Card";
import Input from "../../../components/ui/Input/Input";
import Typography from "../../../components/ui/Typography/Typography";
import { api } from "../../../utils/api";

const CreateUsagePage = () => {
  const { mutate, isLoading } = api.consumption.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  type formType = z.infer<typeof ConsumptionCreateInputObjectSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<formType>();

  console.log(touchedFields)
  return (
    <div>
      <Typography variant="title">Create Usage</Typography>
      <Card className="mt-4">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="my-2 flex w-full flex-row items-center justify-evenly">
            <Input
              {...register("start")}
              type="datetime-local"
              label="Start"
              error={Boolean(errors.start)}
              helperText={errors.start?.message}
            />
            <Input
              {...register("end")}
              type="datetime-local"
              label="End"
              error={Boolean(errors.end)}
              helperText={errors.end?.message}
            />
          </div>

          <div className="my-2 flex w-full flex-row items-center justify-evenly">
            <Input
              {...register("SMC_start")}
              type="number"
              label="SMC Start"
              error={Boolean(errors.SMC_start)}
              helperText={errors.SMC_start?.message}
            />
            <Input
              {...register("SMC_end")}
              type="number"
              label="SMC End"
              error={Boolean(errors.SMC_end)}
              helperText={errors.SMC_end?.message}
            />
          </div>

          <div className="my-2 flex w-full flex-row items-center justify-evenly">
            <Input
              {...register("T_heater")}
              type="number"
              label="Heater temperature"
              error={Boolean(errors.T_heater)}
              helperText={errors.T_heater?.message}
            />

            <Input
              {...register("T_extern")}
              type="number"
              label="Outside temperature"
              error={Boolean(errors.T_extern)}
              helperText={errors.T_extern?.message}
            />
          </div>

          <div className="my-2 flex w-full flex-row items-center justify-evenly">
            <Input
              {...register("T_start")}
              type="number"
              label="Inside temperature start"
              error={Boolean(errors.T_start)}
              helperText={errors.T_start?.message}
            />
            <Input
              {...register("T_end")}
              type="number"
              label="Inside temperature end"
              error={Boolean(errors.T_end)}
              helperText={errors.T_end?.message}
            />
          </div>

          <div className="my-2 flex w-full flex-row items-center justify-end">
            <LoadingButton loading={isLoading} type="submit">
              Create
            </LoadingButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateUsagePage;
