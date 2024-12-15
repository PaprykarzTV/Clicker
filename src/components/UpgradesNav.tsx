import { useMainGameContext } from '../contexts/MainGameContext';

export default function UpgradesNav() {

    const {score,upgradeList,buyUpgrade} = useMainGameContext();

    return (
        <div className={`upgradesNav`}>
            <h2 className='upgradesSectionTitle'>Upgrades</h2>
            <ul className="upgradesList">
                {upgradeList.map((upgrade) => (
                    upgrade.cost <= score && upgrade.bought === false? (
                        <li key={upgrade.id} className="upgradeItem">
                            <p>{upgrade.title}</p>
                            <p>{upgrade.description}</p>
                            <p>{upgrade.cost}</p>
                            <button className='buyUpgradeBtn' onClick={()=>buyUpgrade(upgrade.id)}>buy</button>
                        </li>
                    ) : upgrade.bought === false ? (
                        <li key={upgrade.id} className="upgradeItem disabled">
                            <p>{upgrade.title}</p>
                            <p>{upgrade.description}</p>
                            <p>{upgrade.cost}</p>
                            <button className='buyUpgradeBtn disabled' disabled>buy</button>
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
    );
}
