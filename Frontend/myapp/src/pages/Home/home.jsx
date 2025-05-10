import { MdAdd } from "react-icons/md"
import NoteCard from "../../components/cards/noteCard"
import { useState } from "react"
import Modal from "react-modal"
import AddEditNotes from "./addEditNotes"

const Home = () => {
    const [openAddEditModel, setOpenAddEditModel] = useState({
        isShown: false,
        type: "add",
        data: null,
    })

    return (
        <>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
                    <NoteCard
                        title={"Wake up at 6 p.m"}
                        date={"9th May 2025"} content={"You Know nothing ,Jon Snow"}
                        tags={"#jonsnow"}
                        isPinned={true}
                        onEdit={() => { }}
                        onDelete={() => { }}
                        onPinNote={() => { }}
                    />
                    <NoteCard
                        title={"Wake up at 6 p.m"}
                        date={"9th May 2025"} content={"You Know nothing ,Jon Snow 1:50 time to close"}
                        tags={"#jonsnow"}
                        isPinned={true}
                        onEdit={() => { }}
                        onDelete={() => { }}
                        onPinNote={() => { }}
                    />
                    <NoteCard
                        title={"Wake up at 6 p.m"}
                        date={"9th May 2025"} content={"You Know nothing ,Jon Snow"}
                        tags={"#jonsnow"}
                        isPinned={false}
                        onEdit={() => { }}
                        onDelete={() => { }}
                        onPinNote={() => { }}
                    />
                </div>
            </div>
            <button className="w-16 h-16 flex items-center justify-center rounded-2xl  bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={() => {
                    setOpenAddEditModel({ isShown: true, type: "add", data: null })
                }}
            >
                <MdAdd className="text-[32px] text-white" />
            </button>
            <Modal isOpen={openAddEditModel.isShown} onRequestClose={() => { }} style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.2)"
                }
            }}
                contentLabel=""
                className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
            >
                <AddEditNotes
                    onClose={() => { setOpenAddEditModel({ isShown: false, type: "add", data: null }) }}
                    noteData={openAddEditModel.data}
                    type={openAddEditModel.type}
                />
            </Modal>
        </>
    )
}

export default Home