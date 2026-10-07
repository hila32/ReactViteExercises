import { useRef, useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const Form = () => {
  let addressRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState({
    age: "",
  });

  interface FormData {
    name: string;
    age?: number;
    address?: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = (data: FieldValues) => {
    if (addressRef.current) console.log(addressRef.current.value);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {
            required: "enter a name",
            minLength: { value: 4, message: "enter min 4 characters" },
          })}
          placeholder="שם"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="label-form">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, age: event.target.value });
            console.log(person);
          }}
          value={person.age}
          placeholder="גיל"
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="label-form">
          Address
        </label>
        <input
          ref={addressRef}
          placeholder="כתובת"
          type="text"
          className="form-control"
        />
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
