
const Alert = ({ alert }) => {
    return (
        <div
            className={`${
                alert.error
                ? "alert-error"
                : "alert-ok"}`}
        >
            {alert.msg}
        </div>
    );
};

export default Alert;
