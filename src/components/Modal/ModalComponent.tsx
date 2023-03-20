import React from "react";
import useModal from "../../hooks/useModal";

const ModalComponent: React.FC = () => {
    const { isModalOpen, modalTasks, onClose, onDelete } = useModal();

    return (
        <>
            {isModalOpen && (
                <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-neutral-500/40">
                    <div className="flex h-60 w-1/3 flex-col rounded-md bg-slate-100 p-6">
                        <div className="mt-auto text-center text-xl">
                            {`If you delete "${modalTasks}", all the tasks will be
                            deleted as well`}
                            <br />
                            <br />
                            Are you sure?
                        </div>

                        <div className="mt-auto flex justify-end gap-x-3">
                            <button
                                onClick={onClose}
                                className="rounded-md bg-amber-400 px-2 py-1 text-slate-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onDelete}
                                className="rounded-md bg-red-600 px-2 py-1 text-slate-100"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalComponent;
