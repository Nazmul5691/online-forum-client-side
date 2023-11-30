/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
    return (
        <div className="my-20 w-[70%] mx-auto">
            <div>
            <div className="flex justify-center items-center my-10 font-bold">
                <h2 className="font-bold text-blue-700 text-4xl">Talk Craft</h2>

                
            </div>
            <div>
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p>"Have questions or need assistance with your forums needs? We're here to help. Feel free to reach out."</p>


                    <h2 className="text-xl font-bold mb-4 mt-8">Contact Information</h2>
                    <p> 
                        Address: <input className="bg-slate-200  mb-2" type="text" name="" id="" /> <br />

                        Phone: <input className="bg-slate-200 mb-2" type="text" name="" id="" /> <br />
 
                        Email: <input className="bg-slate-200 mb-2" type="text" name="" id="" /></p>

                    <h2 className="text-xl font-bold mb-4 mt-8">Get in Touch</h2>
                    <p>You can also use the contact form below to send us a message. We will respond to your inquiry as soon as possible.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;