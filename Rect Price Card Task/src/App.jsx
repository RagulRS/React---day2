
import './App.css'

function App() {
  

  return (

    <>
    <h1>React Price Card</h1>
    <div className="main-container">
      <Card />
      <Card2 />
      <Card3 />
      </div>
      
      
    </>
  )
}


function Card(){
  return(
    <>
    
          <div className="card1">
          <div class="card-header">
                <p>FREE</p>
                <h1>$0/month</h1>
                <hr></hr>
            </div>
            <div class="card-body">
               <ul> <ul class='tick'>
                    <p>Single User</p>
                    <p>50GB Storage</p>
                    <p>Unlimited Public Projects</p>
                    <p>Community Access</p>
                    </ul>
                    <ul class = 'untick'>
                    <p>Unlimited Private Projects</p>
                    <p>Dedicated Phone support</p>
                    <p>Free Subdomain</p>
                    <p>Monthly Status Reports</p>
                </ul></ul>
                
            </div>
            <button className='btn'>BUTTON</button>
          </div>
      
      </>
  );
}


function Card2(){
  return(
    <>
    
          <div className="card2">
          <div class="card-header">
                <p>PLUS</p>
                <h1>$9/month</h1>
                <hr></hr>
            </div>
            <div class="card-body">
              <ul>
                <ul className='tick'>
                    <p>5 Users</p>
                    <p>50GB Storage</p>
                    <p>Unlimited Public Projects</p>
                    <p>Community Access</p>
                    <p>Unlimited Private Projects</p>
                    <p>Dedicated Phone support</p>
                    <p>Free Subdomain</p>
                    </ul>
                    <ul class = 'untick'>
                    <p> Monthly Status Reports</p>
                </ul>
                </ul>
                
            </div>
            <button className='btn'>BUTTON</button>
          </div>
      
      </>
  );
}

function Card3(){
  return(
    <>
    
          <div className="card3">
          <div class="card-header">
                <p>PLUS</p>
                <h1>$49/month</h1>
                <hr></hr>
            </div>
            <div class="card-body">
                <ul className='tick2'>
                    <p>Unlimited Users</p>
                    <p>50GB Storage</p>
                    <p>Unlimited Public Projects</p>
                    <p>Community Access</p>
                    <p>Unlimited Private Projects</p>
                    <p>Dedicated Phone support</p>
                    <p>Free Subdomain</p>
                    <p>Monthly Status Reports</p>
                </ul>
                
            </div>
            <button className='btn-3'>BUTTON</button>
          </div>
      
      </>
  );
}
export default App
