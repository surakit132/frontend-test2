import iconX from "../../../assets/svgs/icons/icon-x.svg";

const DeletePetProfileConfirm = ({
  open,
  close,
  handleDeletePetProfile,
  petId,
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded-2xl transition-all w-[343px] md:w-[400px] ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex justify-between px-4 py-2 border-b">
          <h1 className="font-medium text-[18px] leading-[26px]">
            Delete Confirmation
          </h1>
          <button onClick={close}>
            <img src={iconX} alt="icon-x-mark" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <p className="text-[16px] leading-[28px] text-[#7B7E8F]">
            Are you sure to delete this pet?
          </p>
          <div className="flex gap-4">
            <button onClick={close} className="btn-secondary">
              Cancel
            </button>
            <button
              onClick={() => handleDeletePetProfile(petId)}
              className="btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePetProfileConfirm;
