// Import Assets
import profile from '../assets/profile1.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Xavier Tan" />

            <div className='header__content'>
                <h1>Hi, I'm Xavier Tan</h1>
                <p>Blockchain Developer</p>
                <button className='button'>
                    <a href = "mailto:Xavier@email.com ? subject = Interest In Getting In Touch">
                    Get In Touch
                    </a>
                </button>
            </div>
        </section>
    );
}

export default Header;