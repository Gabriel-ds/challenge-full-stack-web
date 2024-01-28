import { api } from "../plugins/axios";

export function ApiStudents() {
  const getStudants = async () => {
    const { data } = await api.get("/students");
    return data;
  };

  const createStudant = async (studant) => {
    const { data } = await api.post("/students", studant);
    return data;
  };

  const deleteStudant = async (studantId) => {
    const {data} = await api.delete(`/students/${studantId}`) 
    return data
  };

  const updateStudant = async (student, id) => {
    const { data } = await api.put(`/students/${id}`, student )
    return data
  };

  return {
    getStudants,
    createStudant,
    updateStudant,
    deleteStudant
  };
}
