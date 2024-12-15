import { createContext, useContext, useState } from "react";
import data from '../data/upgradeList.json';

type ModifierType = "sum" | "multiply";

type UpgradeItem = {
    id: number;
    title: string;
    description: string;
    cost: number;
    bought: boolean;
    modifier: number;
    modifierType: ModifierType;
}

type MainGameContextType = {
    score: number;
    setScore: (score: number) => void;
    modifier: number;
    setModifier: (modifier: number) => void;
    handleScoreIncrement: () => void;
    upgradeList: UpgradeItem[];
    buyUpgrade: (id: number) => void;
}



const MainGameContext = createContext<MainGameContextType | undefined>(undefined);

export const MainGameContextProvider = ({children}: {children: React.ReactNode}) => {
    const [score, setScore] = useState(0);
    const [modifier, setModifier] = useState(1);
    const [upgradeList, setUpgradeList] = useState<UpgradeItem[]>(data.upgradeList as UpgradeItem[]);
    
    const handleScoreIncrement = () => {
        setScore(prev => prev + modifier);
    }

    const buyUpgrade = (id: number) => {
        console.log("bought upgrade with id: ", id);
        const updatedUpgradeList = upgradeList.map(upgrade => {
            if (upgrade.id === id) {
                setScore(prev => prev - upgrade.cost);
                switch(upgrade.modifierType) {
                    case "sum":
                        {   
                            setModifier(prev => prev + upgrade.modifier);
                            return { ...upgrade, bought: true};
                        }
                    case "multiply":
                        {
                            setModifier(prev => prev * upgrade.modifier);
                            return { ...upgrade, bought: true};
                        }
                    default: break;
                }
            }
            return upgrade;
        });
        setUpgradeList(updatedUpgradeList);
    }

    return(
        <MainGameContext.Provider value={{score, setScore, modifier, setModifier, handleScoreIncrement,upgradeList,buyUpgrade}}>
            {children}
        </MainGameContext.Provider>
    )
}

export const useMainGameContext = () => {
    const context = useContext(MainGameContext);
    if (!context) {
        throw new Error("useMainGameContext must be used within a MainGameContextProvider");
    }
    return context;
}