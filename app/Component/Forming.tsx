"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, MenuItem, Button } from "@mui/material";
import { useEffect, useState } from "react";

interface forms {
  clothes: string;
  name: string;
  photo: string;
  size: string[];
  description:string;
  price: number;
}

interface props{
  title_form: string;
  button_form:string;


}

export default function Forming({title_form,button_form}:props) {
  const default_Values =
    title_form === "Adjustment Item"
      ? {
          clothes: "T-Shirt",
          name: "Nike Air",
          photo: "",
          size: ["M", "S", "XL"],
          description: "Comfortable cotton T-shirt",
          price: 30,
        }
      : {
          clothes: "",
          name: "",
          photo: "",
          size: [],
          description: "",
          price: 0,
        };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<forms>({
    defaultValues: default_Values,
  });


  const [selectedSizes, setSelectedSizes] = useState<string[]>(default_Values.size || []);

  // Sync form field when the state changes
  useEffect(() => {
    setValue("size", selectedSizes);
  }, [selectedSizes, setValue]);

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedSizes(event.target.value as string[]);
  };
  

  const onSubmit: SubmitHandler<forms> = (data) => {
    console.log("Form Data:", data);
  };

  return (

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl mx-auto my-10 shadow-xl p-6 md:p-8 w-full  space-y-5"
      >
        <h2 className="text-3xl font-semibold text-cyan-600 text-center">
          {title_form}
        </h2>

        {/* Clothes Field */}
        <TextField
          {...register("clothes",{required:'Clothes type is required'})}
          label="Clothes"
          variant="outlined"
          error={!!errors.clothes}
          helperText={errors.clothes?.message}
          className="w-full"
        />

        {/* Name Field */}
        <TextField
          {...register("name", { required: "Name is required" })}
          label="Name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name?.message}
          className="w-full"
        />

        {/* Photo Field (URL) */}
        <div className="flex flex-col space-y-2">
  <label className="text-gray-700 text-md font-medium">Upload Photo</label>
  <TextField
    type="file"
    {...register("photo", {
      required: "Photo is required",
    })}
    variant="outlined"
    error={!!errors.photo}
    helperText={errors.photo?.message}
    className="w-full"
  />
</div>


        {/* Size Selection (Dropdown with Multiple Select) */}
        <TextField
          select
          label="Size"
          variant="outlined"
          value={selectedSizes}
          onChange={handleSizeChange}
          error={!!errors.size}
          helperText={errors.size?.message}
          className="w-full"
          SelectProps={{ multiple: true }}
        >
          {["S", "M", "L", "XL","2XL"].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>

        <TextField 
        {...register('description',{required:'Description is required'})}
        label='Description'
        variant="outlined"
        error ={!!errors.description}
        helperText={errors.description?.message}
        className="w-full"
        />

        {/* Price Field */}
        <TextField
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than 0" },
          })}
          label="Price"
          type="number"
          variant="outlined"
          error={!!errors.price}
          helperText={errors.price?.message}
          className="w-full"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full  hover:bg-blue-500 hover:text-white  py-2 rounded-xl transition-all"
        >
          {button_form}
        </Button>
      </form>
  );
}
