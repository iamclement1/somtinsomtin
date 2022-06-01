import Sidebar from '../../Components/Sidebar/Sidebar'
import SettingsContent from './SettingsContent'

function Settings() {

    return (
    <Sidebar>
        <main className="py-4 px-7">
            <div className="container-full">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-xl text-[#E0013F]">
                            Hi, welcome back!
                        </h4>
                        <p className="text-sm text-gray-500">
                            Make you Sometin App look like you.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <SettingsContent />
                </div>
            </div>
        </main>
    </Sidebar>
)
}

export default Settings
