// import React from "react";
// import { Footer, Navbar } from "../components";
// const ContactPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="form my-3">
//                 <label for="Name">Name</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div class="form my-3">
//                 <label for="Email">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="form  my-3">
//                 <label for="Password">Message</label>
//                 <textarea
//                   rows={5}
//                   class="form-control"
//                   id="Password"
//                   placeholder="Enter your message"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   class="my-2 px-4 mx-auto btn btn-dark"
//                   type="submit"
//                   disabled
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;

// #################################################################################

import React from 'react'
import { useForm } from "react-hook-form";
import { Navbar } from "../components";
// import images from '../../assets/england2.png'


const Contact = () => {
  
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formEndpoint = "https://formspree.io/f/xbjngkkn";
  const onSubmit = async (data) => {
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      alert("Form was successfully submitted");
      reset();
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };
  // const { register, handleSubmit ,formState: { errors }} = useForm();
  // const handleRegistration = (data) => console.log(data);
  // const handleError = (errors)=>{}
  // const registerOptions = {
  //     name: { required: "Name shubham is required" },
  //     email: { required: "Email is required" },
  //     password: {
  //       required: "Password is required",
  //       minLength: {
  //         value: 8,
  //         message: "Password must have at least 8 characters"
  //       }
  //     }
  //   };

  return (
    
    <div>
      <Navbar />
      <section class="bg-light py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">Contact</h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-lg-center">
            <div class="col-12 col-lg-9">
              <div class="bg-white border rounded shadow-sm overflow-hidden">

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div class="col-12">
                      <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="fullname" name="name"
                      {...register("name", {required: true})}/>
                      <error style={{ color: "red"}}>
                        {errors.name?.type === "required" && "Name is required"}
                      </error>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input type="text" class="form-control" id="email" name="email" 
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}/>
                      </div>
                      <error style={{ color: "red" }}>
                        {errors.email?.type === "required" &&
                          "Email is required"}
                        {errors.email?.type === "pattern" &&
                          "Entered email is in wrong format"}
                      </error>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="phone" class="form-label">Phone Number</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </span>

                        <input type="tel" class="form-control" id="phone" name="phone" 
                        {...register("number", {
                          required: true,
                          minLength: 10,
                          maxLength: 12,
                        })}/>
                      </div>
                      <error style={{ color: "red"}}>
                        {errors.number?.type === "required" &&
                          "Phone number is required"}
                        {errors.number?.type === "minLength" &&
                          "Entered number is less than 10 digits"}
                        {errors.number?.type === "maxLength" &&
                          "Entered number is more than 12 digits"}
                      </error>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label">Message & Reviews <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="message" name="message" rows="3"
                      {...register("message", { required: true })}
                      >
                      </textarea>
                      <error style={{ color: "red"}}>
                      {errors.message?.type === "required" &&
                        "Message is required"}
                    </error>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
