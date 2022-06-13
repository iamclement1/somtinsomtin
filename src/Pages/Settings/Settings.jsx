import Sidebar from '../../Components/Sidebar/Sidebar'
import SettingsContent from './SettingsContent'

function Settings() {

    return (
        <Sidebar>
            <main className="py-4 px-7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-xl text-[#E0013F]">
                                Hi, welcome back!
                            </h4>
                            <p className="text-sm text-gray-500">
                                Let's make your Somtin App look like you.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <SettingsContent />
                        </div>
                    </div>
                </div>
            </main>
        </Sidebar>
    )
}

export default Settings
