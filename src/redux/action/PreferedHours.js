import axios from "axios";
const PatchLoading = () => {
    return {
        type: "LOADING",

    }
}

const PatchError = (error) => {
    return {
        type: "PATCH_ERROR",
        payload: error

    }
}

export const PatchGet = (workingHours) => {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    return (dispatch) => {
        dispatch(PatchLoading())
        axios.patch(`http://34.210.129.167/api/users/${id}/preferred-working-hours`,
            {
                workingHours: `${workingHours}`,
            }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        }).then((res) => {

        })
            .catch(error => {
                dispatch(PatchError(error))
            })
    }
}