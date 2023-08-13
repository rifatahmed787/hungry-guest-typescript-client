import { IRegister, IRegisterRes } from "../../../types/auth.types";
import { apiSlice } from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<IRegisterRes, IRegister>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    //   userLogin: builder.mutation<ILoginRes, ILoginArgs>({
    //     query: (data) => ({
    //       url: "/auth/login",
    //       method: "POST",
    //       body: data,
    //     }),
    //     async onQueryStarted(loginArgs, { dispatch, queryFulfilled }) {
    //       try {
    //         const loginRes = await queryFulfilled;
    //         if (loginRes) {
    //           dispatch(
    //             login({
    //               user: loginRes?.data?.data?.user,
    //               accessToken: loginRes?.data?.data?.accessToken,
    //               refreshToken: loginRes?.data?.data?.refreshToken,
    //             })
    //           );
    //           dispatch(
    //             setCurrentModal({
    //               name: "login",
    //             })
    //           );
    //           Cookies.set("token", loginRes?.data?.data?.accessToken ?? "");
    //           redirect("/user/home");
    //         }
    //       } catch {}
    //     },
    //   }),

    //   userLogOut: builder.mutation<any, void>({
    //     query: (data) => ({
    //       url: "/auth/logout",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   userResetPass: builder.mutation<IUserResetPassRes, IUserResetPassArgs>({
    //     query: (data) => ({
    //       url: "/auth/reset-password",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   userPassWordChange: builder.mutation<
    //     IUserPassWordChangeRes,
    //     IUserPassWordChangeArgs
    //   >({
    //     query: (data) => ({
    //       url: "/auth/change-password",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   userGetById: builder.query({
    //     query: (id) => ({
    //       url: `auth/get-userbyid/${id}`,
    //     }),
    //   }),

    //   userFollow: builder.mutation({
    //     query: (data) => ({
    //       url: "/follow/following",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   getUserDetails: builder.query<IGetUserDetailsRes, IGetUserDetailsArgs>({
    //     query: () => ({
    //       url: "/auth/get-user-details",
    //       method: "GET",
    //     }),
    //   }),
  }),
});

export const {
  // useUserLoginMutation,
  useUserRegisterMutation,
  // useUserResetPassMutation,
  // useUserLogOutMutation,
  // useUserPassWordChangeMutation,
  // useUserGetByIdQuery,
  // useGetUserDetailsQuery,
} = authApi;
