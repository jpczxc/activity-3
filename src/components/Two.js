import Shoes from './Shoes';
import Gadget from './Gadget';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function Two() {
    let SelectedChoice = sessionStorage.getItem('choice');

    let shoeFunc = () => {
        let choice = document.getElementById('shoes').innerText;
        sessionStorage.setItem('choice', choice)
        window.location.reload();
    }

    let gadFunc = () => {
        let choice = document.getElementById('gadget').innerText;
        sessionStorage.setItem('choice', choice)
        window.location.reload();
    }

    let condition = SelectedChoice == "Shoes";

    return(
        <>
            <div className='text-center p-5 btn-style' >
                <button className='btn btn-primary' type="button" id="shoes" onClick={shoeFunc}>Shoes</button>
                <button className='btn btn-secondary' type="button" id="gadget" onClick={gadFunc}>Gadgets</button>
            </div>

            {condition ? <Shoes/> : <Gadget/>}
        </>
    )
}

export default Two;