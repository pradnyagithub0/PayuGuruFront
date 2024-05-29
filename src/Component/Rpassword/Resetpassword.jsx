import './Resetpassword.css';


const Resetpassword = () => {
    
   



    return (
        <div>
        
        <section className="mt-5 py-5 enquiry-section1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2 col-12 "></div>
                <div className="col-lg-6 col-md-8 col-12">
                    <form className="form">
                        <h3 className="text-center">Reset Password</h3>
                        <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" 
                        alt="home-icon"/> Home</a> </p>

                        

                        <div className="inputbox">
                                 <label>Password</label>
                                 <input   type="text" placeholder='New Password' />
                                 
                                 <p className="msg"></p>
                        </div>

                        <div className="inputbox">
                             <label>Confirm Password</label>
                             <input  type="text" placeholder='Repeat Password' />
                            
                        <p className="msg"></p>
                        </div>
                        
                        
                        <button className="submitButton">
                        Reset
                      </button>
                        

                        
                    </form>
                        
               </div>
                
            </div>
        </div>
    </section>
    
    </div>
    
            
      )
};
export default Resetpassword;