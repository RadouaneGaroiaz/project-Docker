import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

describe("useForm", () => {
  const props = {
    data: {
      name: "",
      lastname: "",
      email: "",
      discordId: "",
      story: "",
    },
    error: {
      name: "",
      lastname: "",
      email: "",
      discordId: "",
      story: "",
    },
  };

  it("should return initial formData state", () => {
    const { result } = renderHook(() => useForm(props));
    expect(result.current.formData).toEqual(props);
  });

  it("should update formData state with setDynamicFormData", () => {
    const { result } = renderHook(() => useForm(props));
    act(() => {
      result.current.setDynamicFormData("name", "John");
    });
    expect(result.current.formData.data.name).toEqual("John");
  });

  it("should update error state with validate function", () => {
    const { result } = renderHook(() => useForm(props));
    act(() => {
      result.current.setDynamicFormData("name", "");
    });
    expect(result.current.formData.error.name).toEqual("name is required");
  });

  it("should return true if form is valid", () => {
    const { result } = renderHook(() => useForm(props));
    act(() => {
      result.current.setDynamicFormData("name", "John");
      result.current.setDynamicFormData("lastname", "Doe");
      result.current.setDynamicFormData("email", "john@example.com");
      result.current.setDynamicFormData("discordId", "johndoe#1234");
      result.current.setDynamicFormData("story", "Once upon a time...");
    });
    expect(result.current.isValid).toEqual(true);
  });

  it("should return false if form is invalid", () => {
    const { result } = renderHook(() => useForm(props));
    act(() => {
      result.current.setDynamicFormData("name", "John");
      result.current.setDynamicFormData("lastname", "");
      result.current.setDynamicFormData("email", "");
      result.current.setDynamicFormData("discordId", "");
      result.current.setDynamicFormData("story", "");
    });
    expect(result.current.isValid).toEqual(false);
  });

  it("should clear formData state with clearForm function", () => {
    const { result } = renderHook(() => useForm(props));
    act(() => {
      result.current.setDynamicFormData("name", "John");
      result.current.clearForm();
    });
    expect(result.current.formData).toEqual(props);
  });
});
