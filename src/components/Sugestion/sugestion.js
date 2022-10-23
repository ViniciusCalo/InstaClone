import './styleSugestion.css'

export function Suggestion() {
    return (
        <div className='containerSug'>
            <div className="headerSug">
                <img src="https://avatars.githubusercontent.com/u/87732419?v=4" />
                <div className="userInfoSug">
                    <div className="infos">
                        <span>oviniciuscalo</span>
                        <p>Vinicius Caló</p>
                    </div>
                    <button className='switch'>Mudar</button>
                </div>
            </div>

            <div className='headerMainSug'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='userSug'>
                <div className='infosSug'>
                    <img src="https://i.redd.it/25biwnli1r961.jpg" />
                    <div className='infoSug'>
                        <span>jamesSullivan</span>
                        <p>seguido por matheuzin</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>
                <div className='infosSug'>
                    <img src="https://miro.medium.com/max/1400/1*y_uyQN1xEjppGVWJJkibMQ.jpeg" />
                    <div className='infoSug'>
                        <span>MarySS</span>
                        <p>nova no instagram</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>
                <div className='infosSug'>
                    <img src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" />
                    <div className='infoSug'>
                        <span>pedro_parque</span>
                        <p>seguido por otaldojeff</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>
                <div className='infosSug'>
                    <img src="https://pbs.twimg.com/profile_images/1569047559389192195/sjETDGbS_400x400.jpg" />
                    <div className='infoSug'>
                        <span>EstagiariodaF1</span>
                        <p>seguido por massinhadaF1</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>
                
            </div>

            <footer className='footerSug'>
                <p>&bull; Ajuda &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; Idioma &bull;</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    );
}