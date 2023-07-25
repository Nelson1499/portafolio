import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { deleteProject, getProjectsPage } from "../../api/api.projects";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { getAuth } from "../../api/api.users";
import { toast } from "react-hot-toast";

const PanelContainer = (props) => {
  const [pageProjects, setpageProjects] = useState([]);
  const [email, setEmail] = useState("");
  const { update, setupdate } = props;
  const getPage = (page) => {
    const pageNumber = page || 1;
    getProjectsPage(pageNumber)
      .then((res) => setpageProjects(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getPage();
    getAuth()
      .then((res) => setEmail(res.data.email))
      .catch((e) => console.log(e));
  }, [update]);
  const numPage = () => {
    const paginationItems = [];

    for (let index = 0; index < pageProjects.totalPages; index++) {
      paginationItems.push(
        <Pagination.Item
          key={index + 1}
          active={index + 1 === pageProjects.currentPage}
          onClick={() => getPage(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };
  const removeProject = (id) => {
    const data = { id, email };
    deleteProject(data)
      .then((res) => {
        toast.success(res.data.message);
        setupdate(!update);
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  return (
    <div className="m-auto w-11/12 md:w-6/12 text-center bg-slate-700 bg-opacity-20 p-2">
      <div className="mt-auto">
        <table className=" w-full">
          <thead className="px-2">
            <tr>
              <th>#</th>
              <th>Titulo proyecto</th>
              <th>Descripcion</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {pageProjects.projects?.map((project, i) => (
              <tr key={project._id} className="border-b-2 py-2 border-white">
                <td>{i + 1}</td>
                <td>{project.title}</td>
                <td>{project.description.slice(0, 50)}</td>
                <td className="cursor-pointer">
                  <Tooltip title="Eliminar" placement="right">
                    <DeleteIcon
                      className="hover:text-red-600"
                      onClick={() => removeProject(project._id, email)}
                    />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="m-auto justify-center">
          <Pagination>
            {pageProjects.currentPage > 1 && (
              <Pagination.First onClick={() => getPage(1)} />
            )}
            {pageProjects.currentPage > 1 && (
              <Pagination.Prev
                onClick={() => getPage(pageProjects.currentPage - 1)}
              />
            )}

            {numPage()}
            {pageProjects.currentPage < pageProjects.totalPages && (
              <Pagination.Next
                onClick={() => getPage(pageProjects.currentPage + 1)}
              />
            )}
            {pageProjects.currentPage < pageProjects.totalPages && (
              <Pagination.Last
                onClick={() => getPage(pageProjects.totalPages)}
              />
            )}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default PanelContainer;
