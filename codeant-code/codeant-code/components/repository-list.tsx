import { Badge } from "@/components/ui/badge"

const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  }
]

const languageColors: Record<string, string> = {
  React: "#61DAFB",
  Javascript: "#F7DF1E",
  Python: "#3776AB",
  Swift: "#FA7343",
  Java: "#007396",
  "HTML/CSS": "#E34F26"
}

export function RepositoryList() {
  return (
    <div className="grid gap-4">
      {repositories.map((repo) => (
        <div
          key={repo.name}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-2 sm:gap-0"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-medium hover:text-blue-600 cursor-pointer">
                  {repo.name}
                </h3>
                <Badge variant={repo.visibility === "Public" ? "secondary" : "outline"}>
                  {repo.visibility}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span 
                  className="flex items-center gap-1.5"
                  style={{ color: languageColors[repo.language] }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  {repo.language}
                </span>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M14 6H6v8h8V6z" />
                    <path
                      fillRule="evenodd"
                      d="M2 4.75C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zM3.75 4.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H3.75z"
                    />
                  </svg>
                  {repo.size}
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2 sm:mt-0">
            Updated {repo.updatedAt}
          </div>
        </div>
      ))}
    </div>
  )
}

