import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
 <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
      <form>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label className="form-check-label" for="flexRadioDefault1">
    M
  </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
    W
  </label>
</div>
<div className="row">
  <div className="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@example.com" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn  btn-primary" id="btn-save">Submit</button>
     </form>
        
        </div>
        <div className="col-4"></div>

    </div>
   
 
  );
}

export default App;
