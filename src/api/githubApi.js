import axios from 'axios';

const token = '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';

const _getSecureAxiosInstance = () => {
  return axios.create({
    baseURL: 'https://api.github.com/repos',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const _getAxiosInstance = () => {
  return axios.create({
    baseURL: 'https://api.github.com/repos',
  });
};

export const getIssues = (user, repository) => {
  return _getAxiosInstance().get(`/${user}/${repository}/issues`, {
    params: {
      state: 'all',
      // Установка timestamp для каждого нового запроса позволяет избежать кэширования get запроса
      timestamp: `${new Date().getTime()}`,
    },
  });
};

export const updateIssue = (owner, repo, issue_number, state) => {
  return _getSecureAxiosInstance().patch(
    `/${owner}/${repo}/issues/${issue_number}`,
    {
      owner,
      repo,
      issue_number,
      state,
    }
  );
};
