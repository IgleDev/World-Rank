export default function useFormik(){
    const formik = useFormik({
            initialValues : {
            name : '',
            lastname : '',
            email : ''
        }, 
       validate : (values) => {
         const errors = {}
         if(!values.name) errors.name = 'Se require el nombre'
         if(!values.lastname) errors.lastname = 'Se require el apellido'
         if(!values.email) errors.email = 'Se require el email'
           return errors;
       },
       onSubmit : values => console.log(values)
    });
    return (
		<form onSubmit={formik.handleSubmit} action="">
			<input type="text" placeholder="Nombre" {...formik.getFieldProps('name')}/> <br />
			{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : ''}
			<input type="text" placeholder="Apellido" {...formik.getFieldProps('lastname')}/> <br />
			{formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : ''}
			<input type="email" name="email" placeholder="Email" {...formik.getFieldProps('email')}/> <br />
			{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : ''}
			<button type="submit">Enviar</button>
		</form>

    )
}