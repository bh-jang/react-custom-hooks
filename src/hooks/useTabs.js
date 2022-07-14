import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    const [currentIndex, setCurrnentIndex] = useState(initialTab);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrnentIndex
    }
}

export default useTabs;