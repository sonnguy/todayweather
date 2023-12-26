import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../hook/useFetch";
import { RequestConfig } from "../types/types";

const config: RequestConfig = {
  url: "",
  method: "GET",
};

describe("useFetch", () => {
  it("should fetch data successfully", async () => {
    const url = `${process.env.REACT_APP_API_URL}/weather?q=London&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const testData = { name: "London" };

    // Mock the fetch response
    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(testData),
      ok: true,
    } as any);

    const { result } = renderHook(() => useFetch({ ...config, url }));
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() => expect(result.current.data).toEqual(testData));
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  it("should handle fetch errors", async () => {
    const url = `${process.env.REACT_APP_API_URL}/weather?q=xxx&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const error = new Error("Request failed with status 404");

    // Mock the fetch response to throw an error
    jest.spyOn(window, "fetch").mockRejectedValueOnce(error);

    const { result } = renderHook(() => useFetch({ ...config, url }));
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    
    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() => expect(result.current.data).toEqual(null));
    await waitFor(() => expect(result.current.error).toBe(error));
  });
});
