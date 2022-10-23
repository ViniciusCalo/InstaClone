import { Post } from '../Post/post';
import { Story } from '../Story/story';
import { Suggestion } from '../Sugestion/sugestion';
import './styleLayout.css';
export function Layout() {
    return (
        <>
            <div className='main'>
                <div className='firstC' style={{ gridArea: "firstCollumn" }}>
                    <div className="box">
                        <Story />
                    </div>
                    <div className="box" style={{ margin: "20px 25px " }}>
                        <Post />
                    </div>
                </div>
                <div style={{ gridArea: "secondCollumn" }}>
                    <div className="boxSuggestion" style={{ gridArea: "secondCollumn" }}>
                        <Suggestion />
                    </div>

                </div>


            </div>
        </>
    );
}
