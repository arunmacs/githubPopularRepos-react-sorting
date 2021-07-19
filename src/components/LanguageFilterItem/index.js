import './index.css'

const LanguageFilterItem = props => {
  const {active, filterData, onClickUpdateTab} = props

  const onClickChangeActiveTab = () => {
    onClickUpdateTab(filterData.id)
  }
  const selectedTab = active === filterData.id ? 'selected-language' : ''

  return (
    <>
      <button key={filterData.id} type="button">
        <li
          onClick={onClickChangeActiveTab}
          className={`language-item ${selectedTab}`}
        >
          {filterData.language}
        </li>
      </button>
    </>
  )
}

export default LanguageFilterItem
