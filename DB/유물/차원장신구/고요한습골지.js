export const 고요한습골지 = {
    name: "고요한 습골지",
    type: "accessory",
    effect2pc: "장착한 캐릭터의 HP 최대치가 12% 증가한다. 장착한 캐릭터의 HP 최대치가 5000 이상일 경우, 장착한 캐릭터 및 해당 기억 정령의 치명타 피해가 28% 증가한다."
};

고요한습골지.set2Buffs = {
    "HP": 12
};

고요한습골지.dynamicBuffs = {
    "치명타 피해": (장착캐릭터) => {
        const HP최대치 = 장착캐릭터.finalStats["HP"];
        return HP최대치 >= 5000 ? 28 : 0;
    }
};