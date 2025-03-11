import Form from "./../models/form.model.js"

export const createForm = async (req, res) => {
    try {
      const formData = req.body;
      const newForm = await Form.create(formData);
      res.status(201).json(newForm);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getForms = async (req, res) => {
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const updateForm = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedForm = await Form.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updatedForm);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const deleteForm = async (req, res) => {
    try {
      const { id } = req.params;
      await Form.findByIdAndDelete(id);
      res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
export const uploadFile = async (req, res) => {
  try {
    const resumeUrl = req.file.path;

    res.json({ success: true, resumeUrl });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};