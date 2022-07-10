import './App.css';
import {App as SendbirdApp} from 'sendbird-uikit'
import "sendbird-uikit/dist/index.css";


function App() {

    const appId = "D1E807F1-334A-426D-9CCE-38A2A82C1474"
    const userId = "2314ad41-7367-4eb1-8f29-fe539ebef227"
    // second param to pass to SendBirdApp for a new user to chat with.
    //const userIdB = '5365c12b-3657-44a5-9ee9-6aa13958d5db'


    return (
        <div className="App">
            <SendbirdApp appId={appId} userId={userId}/>
        </div>
    );
}

export default App;
