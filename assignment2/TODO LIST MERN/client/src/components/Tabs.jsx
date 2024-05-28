import { useDispatch } from "react-redux"
import { TABS } from "../Redux/action/type"
import { toogleTabs } from "../Redux/action";

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();

  return (
    TABS.map(tab => (
        <button key={tab}
            className={tab === currentTab ? 'button selected' : 'button'}
            onClick={() => dispatch(toogleTabs(tab))}
        >
            {tab}
        </button>
    ))
  )
}

export default Tabs
