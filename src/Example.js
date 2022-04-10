import {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
} from "./redux/usersApi";

const Example = () => {
  const { data, error, isLoading, refetch } = useGetUsersQuery();
  const { data: singleUserData, isLoading: singleUserLoading } =
    useGetUserQuery(1);

  const [createUser] = useCreateUserMutation();

  const createUserHandler = () => {
    createUser({ id: "qwerty", name: "qwerty qwerty" });

    refetch();
  };

  return (
    <>
      <button onClick={createUserHandler}>add user</button>
      Hello from the example
      {!isLoading &&
        data.map((ele) => {
          return <li key={ele.id}>{ele.name}</li>;
        })}
      <div>
        <h4>single user detaile</h4>
        {!singleUserLoading ? <div>{singleUserData.name}</div> : ""}
      </div>
    </>
  );
};

export default Example;
