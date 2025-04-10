import { useForm } from 'react-hook-form'

const AddSalesForm = () => {

  const {register, handleSubmit, watch} = useForm();
  const  username = watch("username")

  function onSubmit(data) {
    console.log(data)
    console.log(username)
  }
  

  return (
      <>
        <h1>Test form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">UserName</label>
          <input {...register('username')} placeholder='Enter Username '></input>
          <button type='submit'>Submit</button>
        </form>
      </>
    )
}

export default AddSalesForm