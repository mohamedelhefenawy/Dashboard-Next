'use client'
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import {motion} from "framer-motion";

interface forms {
    Location_header: string;
    Location_details: string;
    contact_tel: string;
    contact_email: string;
    photo?: FileList | null;
}

export default function Page() {
    const { register, handleSubmit,   formState: { errors } } = useForm<forms>({
        defaultValues: {
            Location_header: "54709 Willms Station",
            Location_details: "Suite 350, Washington, USA",
            contact_tel: "01272808556",
            contact_email: "melhefnawy718@gmail.com"
        }
    });

    const onSubmit: SubmitHandler<forms> = (data) => {
        console.log("Submitted Data:", data);
    };

    return (
        <motion.form 
        onSubmit={handleSubmit(onSubmit)} 
        className='bg-white rounded-xl mx-auto my-10 shadow-xl p-6 md:p-8 w-full space-y-5'
        initial={{opacity:0,y:50,scale:0.2}}
        animate={{opacity:1,y:0,scale:1}}
        transition={{duration:1,ease:'linear'}}>

            <h1 className='text-3xl font-semibold text-cyan-600 text-center'>Contact Edit</h1>

            <TextField {...register('Location_header', { required: 'Location header is required' })}
                label='Location Header'
                error={!!errors.Location_header}
                variant='outlined'
                helperText={errors.Location_header?.message}
                className='w-full'
            />

            <TextField {...register('Location_details', { required: 'Location details is required' })}
                label='Location Details'
                variant='outlined'
                error={!!errors.Location_details}
                helperText={errors.Location_details?.message}
                className='w-full'
            />

            <TextField {...register('contact_tel', { required: 'Phone Number is required' })}
                label='Phone Number'
                variant='outlined'
                error={!!errors.contact_tel}
                helperText={errors.contact_tel?.message}
                className='w-full'
            />

            <TextField {...register('contact_email', { required: 'E-mail is required' })}
                label='E-mail'
                variant='outlined'
                error={!!errors.contact_email}
                helperText={errors.contact_email?.message}
                className='w-full'
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

            <Button type="submit" variant="contained" className="w-full hover:bg-blue-500 hover:text-white py-2 rounded-xl transition-all">
                Submit
            </Button>
        </motion.form>
    );
}
