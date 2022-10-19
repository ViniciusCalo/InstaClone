import { Post } from '../Post/post';
import { Story } from '../Story/story';
import './styleLayout.css';
export function Layout() {
    return (
        <>
            <div className='main'>
                <div className='firstC' style={{gridArea: "firstCollumn"}}>
                    <div className="box">
                        <Story />
                    </div>
                    <div className="box">
                        <Post />
                    </div>
                </div>

                <div className="boxSuggestion" style={{gridArea: "secondCollumn"}}>
                    forYou
                </div>

            </div>
        </>
    );
}
