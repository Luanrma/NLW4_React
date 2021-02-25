import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={ styles.profileContainer }>
            <img src="https://avatars.githubusercontent.com/u/42654434?s=460&u=18d4c668a2e0767e1e1ea1f2aff1b88301b25362&v=4" alt="Luan Miano"/>
            <div>
                <strong>Luan Miano</strong>
                <p>
                    <img src="icons/level.svg" alt="Çevel" />
                    Level 1
                </p>
            </div>
        </div>
    );
}