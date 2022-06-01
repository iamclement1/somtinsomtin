import SettingsTab from "../../Components/Tabs/SettingsTab"


function SettingsContent() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 flex bg-white rounded-md shadow-sm px-7 py-5">
                <div>
                    <SettingsTab />
                </div>
            </div>
        </div>
    </div>
    )
}

export default SettingsContent