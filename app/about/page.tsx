'use client'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField,  Button } from "@mui/material";


interface Forms {
  text1: string;
  text2: string;
  photo?: FileList | null;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Forms>({
    defaultValues: {
      text1:
        "Even if biotechnology is advancing fast, and we’re heading towards a mix between human and machines (bio-materials applied to the human body and organs plus the advance in nano technology and Artificial Intelligence), the probability is imho 50/50",
      text2:
        'Linguistics and grammar, a sentence is a linguistic expression, such as the English example "The quick brown fox jumps over the lazy dog."',
    },
  });

  const onSubmit: SubmitHandler<Forms> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl mx-auto my-10 shadow-xl p-6 md:p-8 w-full space-y-5"
    >
      <h1 className="text-3xl font-semibold text-cyan-600 text-center">
        About Edit
      </h1>

      <TextField
        {...register("text1", { required: "Text 1 is required" })}
        label="Text 1"
        error={!!errors.text1}
        variant="outlined"
        helperText={errors.text1?.message}
        className="w-full"
      />

      <TextField
        {...register("text2", { required: "Text 2 is required" })}
        label="Text 2"
        variant="outlined"
        error={!!errors.text2}
        helperText={errors.text2?.message}
        className="w-full"
      />

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 text-md font-medium">Upload Photo</label>
        <TextField
                        {...register('photo',{required:'Photo is required'})}
                            type="file"
                            variant='outlined'
                            error={!!errors.photo}
                            helperText={errors.photo?.message}
                            className="w-full"
        />
      </div>

      <Button type="submit" variant="contained" className="w-full py-2 rounded-xl">
        Submit
      </Button>
    </form>
  );
}

