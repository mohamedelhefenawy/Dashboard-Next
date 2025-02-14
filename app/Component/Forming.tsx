"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, MenuItem, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

        <motion.form
        initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 100 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl mx-auto my-10 shadow-xl p-6 md:p-8 w-full space-y-5"
    >
  <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-semibold text-cyan-600 text-center"
      >
        {title_form}
      </motion.h2>

      {["clothes", "name", "photo", "size", "description", "price"].map((field, index) => (
        <motion.div
          key={field}
          initial={{ opacity: 0, x: 50, rotateZ: -5 }}
          animate={{ opacity: 1, x: 0, rotateZ: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        >
          {field === "size" ? (
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
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <TextField
              {...register(field as keyof forms, {
                required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
              })}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              variant="outlined"
              error={!!errors[field as keyof forms]}
              helperText={errors[field as keyof forms]?.message}
              className="w-full"
            />
          )}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 80 }}
      >
        <Button
          type="submit"
          className="w-full hover:bg-blue-500 hover:text-white py-2 rounded-xl transition-all"
        >
          {button_form}
        </Button>
      </motion.div>
    </motion.form>
  );
}
