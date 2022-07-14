import useTabs from "../hooks/useTabs";

const content = [
    {
        tab: 'section 1',
        content: "content 1"
    },
    {
        tab: 'section 2',
        content: "content 2"
    }
]

const ExampleUseTabs = () => {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div>
            <div>
                {
                    content.map((section, index) => {
                        return (
                            <button onClick={() => changeItem(index)}>
                                {section.tab}
                            </button>
                        )
                    })
                }
            </div>
            <div>{currentItem.content}</div>
        </div>
    )
}

export default ExampleUseTabs;